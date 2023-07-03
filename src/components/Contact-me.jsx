
const ContactMe = () => {
    return (
        <div className="bg-amber-600" id="contact-section">
            <form>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Correo</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Asunto</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    )
}

export default ContactMe