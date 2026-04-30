import '../App.css';

export const NoBackImg = ({ noPadding }) => {
    let backImg = 'main-noBackImg'
    if (noPadding) {
        backImg = 'main-noBackImg2'
    }
    return (
        <div className={backImg}>
            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871223/uploads/a03vhjnabg9o1ctm0nnq.png'
                alt='logo' />
        </div>
    )
}