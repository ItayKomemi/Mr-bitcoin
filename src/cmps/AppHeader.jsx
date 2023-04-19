import { NavLink, withRouter } from "react-router-dom";

function _AppHeader() {

    // function onBack() {
    //     props.history.goBack()
    // }

    return (
        <header className="app-header full">
            <section className="header-container">
            <NavLink exact to="/"><h1 className="logo">Mister BITCoin</h1></NavLink>
                <nav className="main-nav">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/contact">Contacts</NavLink>
                    <NavLink to="/charts">Charts</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </nav>
            </section>
        </header>
    )

}

export const AppHeader = withRouter(_AppHeader)