import { useState } from 'react';
import TableRow from './TableRow/TableRow';

const PRICING = {
    "program": 3990,
    "occupancy": [
        { 
            "label": "individual",
            "value":  1
        },
        {
            "label": "couple",
            "value": 2
        }
    ],
    "accommodation": [
        {
            "label": "Deluxe Room",
            "value": 549
        },
        {
            "label": "Garden View Villa (+200)",
            "value": 749
        },
        {
            "label": "Sea View Villa (+400)",
            "value": 949
        }
    ],
    "free": {
        "massage": 250,
        "breakfast": 267,
        "yoga": 120,
        "transfers": 50
    },
    "tax": .1
};

const PricingTable = ():React.ReactElement => {
    const [ occupancy, setOccupancy ] = useState(0);
    const [ accommodation, setAccommodation ] = useState(0);

    // onOccupancyChange = number => {
    //     this.setState({ occupancy: number });
    // };

    // onAccomodationChange = number => {
    //     this.setState({ accommodation: number });
    // };

    const calculate = () => {
        // move this to server as a hook
        // const { occupancy, accommodation } = this.state;

        const no = PRICING.occupancy[occupancy].value;
        const stay = PRICING.accommodation[accommodation].value;
        
        const program = no * PRICING.program;

        const massage = no * PRICING.free.massage;
        const breakfast = no * PRICING.free.breakfast;
        const yoga = no * PRICING.free.yoga;
        const transfers = no * PRICING.free.transfers;

        const exTax = {
            "program": program,
            "stay": stay,
            "massage": massage,
            "breakfast": breakfast,
            "yoga": yoga,
            "transfers": transfers,
            "free": massage + breakfast + yoga + transfers
        };

        const exTaxTotal = exTax.program + exTax.stay + exTax.free;
        const tax = PRICING.tax * exTaxTotal; 

        const total = exTaxTotal + tax;

        const exTaxTotalDiscounted = exTax.program + exTax.stay;
        const totalDiscounted = (1 + PRICING.tax) * exTaxTotalDiscounted;
        const savings = total - totalDiscounted;

        const totalDiscountedPerPerson = totalDiscounted / no;
        const savingsPerPerson = savings / no;

        return {
            "program": exTax.program,
            "stay": exTax.stay,
            "massage": exTax.massage,
            "breakfast": exTax.breakfast,
            "yoga": exTax.yoga,
            "transfers": exTax.transfers,
            "tax": tax,
            "total": total,
            "totalDiscounted": totalDiscounted,
            "savings": savings,
            "savingsPerPerson": savingsPerPerson,
            "totalDiscountedPerPerson": totalDiscountedPerPerson
        };
    };

    const prices = calculate();

    const rows = [
        [
            {
                "content": "Attending as a/an:"
            },
            { 
                "dropdown": {
                    "onChange": setOccupancy,  
                    "list": PRICING.occupancy,           
                    "name": "occupancy"                 
                }
            },
            {},
            {}
        ],
        [
            {
                "content": "Affirming Self-Transformational Retreat",
            },
            {},
            {
                "transform": "strong",
                "content": prices.program
            },
            {}
        ],
        [   
            {
                "content": "Stay at Banburee Resort & Spa"
            },
            { 
                "dropdown": {
                    "onChange": setAccommodation,  
                    "list": PRICING.accommodation,           
                    "name": "accommodation"                 
                }
            },
            {
                "content": prices.stay
            },
            {}
        ],
        [
            { 
                "transform": "emphasis",
                "content": "FREE 5x Swedish Massage"
            },
            {},
            {
                "transform": "discounted",
                "content": prices.massage
            },
            {
                "insert": true
            }
        ],
        [
            {
                "transform": "emphasis",
                "content": "FREE 8x Breakfast"
            },
            {},
            {
                "transform": "discounted",
                "content": prices.breakfast
            }
        ],
        [
            {
                "transform": "emphasis",
                "content": "FREE 7x Yoga Lessons"
            },
            {},
            {
                "transform": "discounted",
                "content": prices.yoga
            }
        ],
        [
            {
                "transform": "emphasis",
                "content": "FREE Airport Transfers"
            },
            {},
            {
                "transform": "discounted",
                "content": prices.transfers
            }
        ],
        [
            {
                "content": "tax (10%)"
            },
            {},
            {
                "content": prices.tax.toFixed(0)
            }
        ],
        [
            {
                "content": "total €"
            },
            {},
            {
                "transform": "discounted",
                "content": prices.total.toFixed(0)
            }
        ],
        [
            {},
            {},
            {
                "transform": "strong",
                "content": prices.totalDiscounted.toFixed(0)
            },
            {
                "transform": "emphasis",
                "content": `Save € ${ prices.savings.toFixed(0) }`
            }
        ],
        [
            {
                "content": "total per person €"
            },
            {},
            {
                "transform": "strong",
                "content": prices.totalDiscountedPerPerson.toFixed(0),
            },
            {
                "transform": "emphasis",
                "content": `Save € ${ prices.savingsPerPerson.toFixed(0)} / person`
            }
        ]
    ];

    const row = rows.shift();

    return (
        <div className="pricing-table" id="pricing-table">
            <table>
                <thead>
                    <TableRow cells={ row } />
                    <tr><td colSpan={ 4 }></td></tr>
                </thead>
                <tbody>
                    { rows.map((row, key) => <TableRow key={ key} cells={ row } />) }
                </tbody>
            </table>
        </div>
    );
    
};

PricingTable.displayName = "PricingTable";

export default PricingTable;