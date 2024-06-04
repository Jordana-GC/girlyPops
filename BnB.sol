// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Airbnb {
    struct House {
        uint256 id;
        address payable owner;
        uint256 pricePerDay;
        bool isBooked;
        uint256 checkinTime;
        uint256 checkoutTime;
    }

    struct Booking {
        uint256 houseId;
        address renter;
        uint256 startDate;
        uint256 endDate;
        bool isCheckedIn;
        bool isCheckedOut;
    }

    uint256 public houseCount = 0;
    uint256 public bookingCount = 0;
    uint256 public lateCheckoutFine = 1 ether;

    mapping(uint256 => House) public houses;
    mapping(uint256 => Booking) public bookings;

    event HouseListed(uint256 houseId, address owner, uint256 pricePerDay);
    event HouseBooked(uint256 bookingId, uint256 houseId, address renter, uint256 startDate, uint256 endDate);
    event CheckedIn(uint256 bookingId, uint256 houseId, address renter);
    event CheckedOut(uint256 bookingId, uint256 houseId, address renter, bool late);

    function listHouse(uint256 pricePerDay) public {
        houseCount++;
        houses[houseCount] = House(houseCount, payable(msg.sender), pricePerDay, false, 0, 0);
        emit HouseListed(houseCount, msg.sender, pricePerDay);
    }

    function bookHouse(uint256 houseId, uint256 startDate, uint256 endDate) public payable {
        House storage house = houses[houseId];
        require(!house.isBooked, "House is already booked");
        require(msg.value >= house.pricePerDay * (endDate - startDate) / 1 days, "Insufficient payment");

        bookingCount++;
        bookings[bookingCount] = Booking(houseId, msg.sender, startDate, endDate, false, false);
        house.isBooked = true;
        house.checkinTime = startDate;
        house.checkoutTime = endDate;
        house.owner.transfer(msg.value);

        emit HouseBooked(bookingCount, houseId, msg.sender, startDate, endDate);
    }

    function checkIn(uint256 bookingId) public {
        Booking storage booking = bookings[bookingId];
        require(block.timestamp >= booking.startDate, "Too early to check in");
        require(msg.sender == booking.renter, "Only renter can check in");

        booking.isCheckedIn = true;
        emit CheckedIn(bookingId, booking.houseId, msg.sender);
    }

    function checkOut(uint256 bookingId) public payable {
        Booking storage booking = bookings[bookingId];
        require(block.timestamp >= booking.endDate, "Too early to check out");
        require(msg.sender == booking.renter, "Only renter can check out");

        bool isLate = block.timestamp > booking.endDate;
        if (isLate) {
            require(msg.value >= lateCheckoutFine, "Late checkout fine is required");
        }

        booking.isCheckedOut = true;
        houses[booking.houseId].isBooked = false;

        emit CheckedOut(bookingId, booking.houseId, msg.sender, isLate);
    }
}
