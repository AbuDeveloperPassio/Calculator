export default function Images(props) {
    return (
        <div className="gallery-wrapper">
            <div className="image-container">
                {
                    props.data.map((oneThing, index) => {
                        return <div key={index}>
                            <img src={oneThing.src} alt={oneThing.name} />
                            <p>{oneThing.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}