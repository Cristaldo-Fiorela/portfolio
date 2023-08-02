const AboutMe = () => {
    return (
        <div className="bg-sky-500 flex flex-col justify-center items-center" id="about-section">
            <h2>About me</h2>

            <div>
                <img src="https://i.imgur.com/F4zRK5X.png" alt="foto perfil"  id="aboutme"/>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non efficitur sapien, quis viverra dolor. In quis ex porttitor, efficitur nisl quis, consequat nunc. Vestibulum mi arcu, ullamcorper at cursus vel, rutrum vel justo. Aliquam dictum diam nec risus feugiat, et posuere velit malesuada. Morbi cursus, tellus eget rhoncus malesuada, odio risus rutrum libero, id efficitur justo tortor non ligula. Suspendisse non dapibus ligula. In lobortis ex vel placerat sagittis. Phasellus nec vulputate sem, id consequat quam. Suspendisse nec augue vestibulum, mollis quam sit amet, mollis libero.
                    </p>
                    <p>
                        Cras ut quam consectetur, luctus ligula quis, maximus lorem. Ut cursus consectetur massa, ut auctor est eleifend nec. In et pharetra justo, nec consequat tortor. Maecenas eget nunc vitae tortor feugiat ullamcorper a eu dolor. Mauris placerat mauris et interdum porttitor. Fusce condimentum tortor scelerisque tincidunt mattis. Ut vel mauris aliquet, suscipit sem vitae, vestibulum metus. Cras ac nunc libero. In bibendum sollicitudin lorem, et posuere elit pellentesque eu. Phasellus sed purus lorem. Nullam non laoreet erat. Aenean faucibus sit amet lorem vitae venenatis.
                    </p>
                    <p>
                        Aliquam erat volutpat. Donec tempus, velit vitae congue fermentum, turpis ipsum aliquet lorem, ac sollicitudin lacus dolor sit amet nibh. Nunc a ultricies ex, quis mattis massa. Nullam lectus urna, lobortis ac tempor et, condimentum ac arcu. Mauris quam metus, tempor sit amet sodales vitae, finibus vehicula mauris. Vivamus vel fringilla augue. Etiam sit amet maximus magna. Vivamus in accumsan dolor.
                    </p>
                    <div>
                        <button type="button">CV</button>
                        <button type="button">Contactame</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe