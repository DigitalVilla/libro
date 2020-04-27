import React, { useState, useEffect } from 'react'

const Section3 = ({ book }) => {
    const [checkInArray, setCheckInArray] = useState([])
    const [checkOutArray, setCheckOutArray] = useState([])

    useEffect(() => {
        const arr = book.loan_history;
        const mapCheckIn = [];
        const mapCheckOut = [];

        for (let i = 0; i < arr.length; i++) {
            const object = arr[i];
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    if (key === 'check_out') {
                        mapCheckOut.push(object[key])
                    } else {
                        mapCheckIn.push(object[key])
                    }
                }
            }
        }

        setCheckInArray(mapCheckIn)
        setCheckOutArray(mapCheckOut)
    }, [])

    return (
        <div className="card-split">
            <div className="card-small max-width">
                <div className="table-container">
                    <CheckTable list={checkOutArray} />
                    <CheckTable list={checkInArray} checkIn />
                </div>
            </div>

            <div className="card-small">
                <div class="book-image-container" >
                    <span class="book-image" style={{ backgroundImage: `url('/images/covers/${book.isbn}.jpg')` }}></span>
                </div>
                <div>
                    <p className="title-sm"><strong>Book Designer:</strong> {book.book_designer}</p>
                    <p className="title-sm"> <strong>Cover Artist:</strong> {book.cover_artist}</p>
                </div>
            </div>
        </div>
    )
}

function CheckTable({ list, checkIn }) {
    const inHeaders = ["Date", "Location", "Condition", "Librarian",]
    const outHeaders = ["User Id", "Date", "Location", "Condition",]

    const headers = checkIn ? inHeaders : outHeaders;

    return (
        <>
            <p className="card-subtitle table-header" style={{ marginTop: `${checkIn ? '1rem' : ''}` }}>
                Check {`${checkIn ? 'In' : 'Out'}`} History
            </p>
            <table>
                <thead>
                    <tr>
                        {
                            headers.map((el) => {
                                return <th>{el}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((check) => {
                            let arr = []

                            for (const key in check) {
                                if (check.hasOwnProperty(key)) {
                                    let element = check[key]
                                    if (key.indexOf('_date') > 0) {
                                        element = element.substring(0, 10);
                                    }

                                    arr.push(<td><span className="title-sm">{element}</span></td>)
                                }
                            }
                            return (<tr> {arr} </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Section3
