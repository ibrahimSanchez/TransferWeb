




export const ListDescriptionComponent = ({ title = '', descriptionTitle = '', listItem = [] }) => {
    return (
        <>


            <div className="row text-success text-center mt-5">

                <h3 className='subTitle'>{title}</h3>
                <p className='text-secondary'>{descriptionTitle}</p>

                <div className="row mt-5 text-start">

                    <div className="col-md-7">
                        <ul className='list-group'>
                            {
                                listItem.map( (item, i) => <li key={item+i} className='list-group-item border-0 mb-5'>{item}</li>
                                )
                            }
                        </ul>
                    </div>


                    <div className="col-md-5">

                        hola
                    </div>
                </div>


            </div>
        </>


    )
}
