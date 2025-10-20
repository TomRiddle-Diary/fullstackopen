const Notification = ({ successMessage }) => {
    if (successMessage !== null) {
        return (
            <div className="success">
                Added {successMessage}
            </div>
        )
    }
}

export default Notification