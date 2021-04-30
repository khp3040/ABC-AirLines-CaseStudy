const dbConnection = require('../connections/dbConnection')
const queries = require('../queries/dbqueries')

module.exports = class FlightRepository {

    /*   async saveProduct(product) {

          let con = await dbConnection();
          try {
              await con.query('START TRANSACTION');
              let savedProduct = await con.query(queries.INSERT_PRODUCT, [product.productId, product.productName, product.price, product.description])
              await con.query('COMMIT');
              product.productId = savedProduct.productId;
              return product;

          } catch (ex) {
              await con.query('ROLLBACK');
              throw ex;
          } finally {
              await con.release();
              await con.destroy();
          }
      } */
    /*
        async confirmBooking(s) {

            let con = await dbConnection();
            try {
                await con.query('START TRANSACTION');
                await con.query(queries.CONFIRM_BOOKING, []);
                await con.query('COMMIT');

                return true;

            } catch (ex) {
                await con.query('ROLLBACK');
                throw ex;
            } finally {
                await con.release();
                await con.destroy();
            }
        }
    */
    async cancelBooking(bk_status) {

        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            await con.query(queries.CANCEL_BOOKING, [bk_status]);
            await con.query('COMMIT');

            return true;

        } catch (ex) {
            await con.query('ROLLBACK')
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }
    async findAllSeatsAvailable() {

        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            const seats = await con.query(queries.FETCH_SEATS_AVAILABLE);
            await con.query('COMMIT');

            return JSON.parse(JSON.stringify(seats));

        } catch (ex) {
            await con.query('ROLLBACK');
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }


    async findByCustomerId(cid) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            const cid = await con.query(queries.SEARCH_BY_CUSTOMER_ID, [c_id]);
            await con.query('COMMIT');

            return JSON.parse(JSON.stringify(cid));

        } catch (ex) {
            await con.query('ROLLBACK');
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }

    }

    async findByFlightId(fid) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            const fid = await con.query(queries.SEARCH_BY_FLIGHT_ID, [f_id]);
            await con.query('COMMIT');

            return JSON.parse(JSON.stringify(fid));

        } catch (ex) {
            await con.query('ROLLBACK');
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }

    }

    async findByFare(fare) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            const fare = await con.query(queries.SEARCH_BY_FARE, [f_fare]);
            await con.query('COMMIT');

            return JSON.parse(JSON.stringify(fare));

        } catch (ex) {
            await con.query('ROLLBACK');
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }

    }


}