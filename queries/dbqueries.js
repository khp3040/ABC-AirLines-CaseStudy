module.exports = {
    FETCH_SEATS_AVAILABLE: `SELECT no_of_seats_available FROM flights`,
    UPDATE_FLIGHT_STATUS: `UPDATE flights SET f_status=? WHERE no_of_seats_available > 0 `,
    CANCEL_BOOKING: `DELETE FROM booking WHERE b_status='YES'`,
    CONFIRM_BOOKING: `UPDATE booking SET b_status='YES' WHERE amt_paid = 'YES'`,

    /*
updat
*/
    SEARCH_BY_FLIGHT_ID: `SELECT no_of_seats_available FROM flights WHERE f_id=? `,
    SEARCH_BY_CUSTOMER_ID: `SELECT b_status FROM booking WHERE c_id=? `,
    SEARCH_BY_FARE: `SELECT f_id FROM flights WHERE f_fare=?`
}