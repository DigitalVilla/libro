import React from 'react'

const Section2 = ({ book }) => {

    const list = [
        { title: 'Country', value: book.publish_country },
        { title: 'Publisher', value: book.publisher },
        { title: 'Publish place', value: book.publish_places },
        { title: 'Edition name', value: book.edition_name },
        { title: 'Published', value: book.date_published },
        { title: 'First publish', value: book.first_publish_year },
        { title: 'Content', value: book.content },
        { title: 'Audience', value: book.audience },
        { title: 'Language', value: book.language },
        { title: 'Format', value: book.physical_format },
    ]

    return (
        <ul className="card-medium grid-row">
            {list.map((el, i) => {
                return <li key="i" className="grid-item">
                    <ul className="content">
                        <span className="title-sm">{el.title}</span>
                        <p>{el.value}</p>
                    </ul>
                </li>
            })}
        </ul>
    )
}

export default Section2