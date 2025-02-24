const Error = ({ err }) => {
    return (
        <div className="error">
            <p>Cold start of the backend took more than 6 seconds.<br></br>Please, try again.</p>
            <a href='https://my-weather-by-max-kly.netlify.app/'>Reload</a>
        </div>
    )
}
export default Error