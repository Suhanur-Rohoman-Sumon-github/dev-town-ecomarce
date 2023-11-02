


const SingleMapData = ({ data }) => {
    const { image, title, description, price } = data

    return (
        <>
            <div className="card w-full bg-base-100 hover:scale-105 hover:shadow-2xl shadow-xl ">
                <figure><img src={image} className="w-full h-64 hover:scale-125" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-success  w-full">Buy Now</button>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default SingleMapData;