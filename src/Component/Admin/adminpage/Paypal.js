var paypal = require('paypal-rest-sdk');
const express = require("express")
const router = express.Router();
const cors = require("cors");
const app = express();


paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AcRRPDmNcq9UphRU9sRsOX7opf2B0ZviKqQVWCW0sN8Nw6PsxOoal9HpY8sV_nsc3sf06y4YkqAD61F9',
    'client_secret': 'ED08Jfr7qQr360HL5OqjYfCN3J3I-OjtSeyBMaBzcLE9MW5qiF4SuvBUOlqtNnnil5ANqx8XSnrSyG59'
});

app.use(cors());


router.get('/dongho', (req, res) => res.render('dongho'));

router.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:4000/paypal/success",
            "cancel_url": "http://localhost:4000/paypal/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Rolex",
                    "sku": "item",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "This is the payment description."
        }]
    };



    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});

router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }

        }]
    };
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('success');
        }
    });

});

router.get('/cancel', (req, res) => res.send('cancel'));
module.exports = router;

