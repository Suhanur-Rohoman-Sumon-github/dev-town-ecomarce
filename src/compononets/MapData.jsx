import SingleMapData from "./SingleMapData";


const MapData = ({datas}) => {
    return (
        <div className="md:grid grid-cols-3 gap-4 mt-10 md:mt-0">
            {datas.map(data=><SingleMapData key={data.id} data={data}></SingleMapData>)}
        </div>
    );
};

export default MapData;