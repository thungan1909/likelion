import OopsImg from '../../assets/img/oops.png'
export default function NotFoundCard() {
    return (
        <>
            <img style={{width: '64px', marginBottom: '16px'}} src={OopsImg}></img>
            <div>Sorry, we can't find this location. Please try again!</div>
        </>
    )
}