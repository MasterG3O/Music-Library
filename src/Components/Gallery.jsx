import GalleryItem from './GalleryItem'

function Gallery(props){

    const songlist = props.data.map((song, index) => {
        return (
            <GalleryItem item={song} key={index} />
        )
    })

    return (
        <div>
        {songlist}
        </div>
    )
}

export default Gallery