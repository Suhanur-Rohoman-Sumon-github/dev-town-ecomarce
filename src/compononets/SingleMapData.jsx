

const SingleMapData = ({ data }) => {
    const {image,title,description,price} = data
    console.log(data)
    return (
        <div className="card w-full bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out">
            <figure><img src={image} className="w-full h-64" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className="card-actions">
                    <button className="btn btn-success  w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleMapData;