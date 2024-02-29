import { Link } from "react-router-dom";
import { useUser } from './context';
import './signStyle.css';
import lays from './lays.jpeg'


export default function Sign() {
    const { state, dispatch } = useUser();

    const handleChange = (elm) => {
        dispatch({
            type: 'input',
            field: elm.target.name,
            payload: elm.target.value,
        });
    };

    const handlereset = () => {
        dispatch({ type: 'reset' });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('User is ', state);

        dispatch({
            type: 'addUser',
            payload: {
                user: state.user,
                email: state.email,
                password: state.password,

            },
        });
    };
    return (
        <>
            <header>
                <ul>
                    <Link to={'/accueil'}><li><img src={lays} style={{ width: '30px' }}alt="" /> </li></Link>
                    <li>Products</li>
                    <Link to={'/about'}><li>About Us / video</li></Link>
                    <li>Recipes</li>
                    <li>Were To Buy</li>
                    <li><input type="search" placeholder="   lays....!" className="search" /></li>
                    <Link to={'/sign-up'}><li className="sign">Sign Up</li></Link>
                </ul>
            </header>
            <div className="page"> 
                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" />
                            <span className="slider"></span>
                            <span className="card-side"></span>
                            <div className="flip-card__inner">
                                <div className="flip-card__front">
                                    <div className="title">Log in</div>
                                    <form className="flip-card__form" action="">
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn">Let`s go!</button>
                                    </form>
                                </div>
                                <div className="flip-card__back">
                                    <div className="title">Sign up</div>
                                    <form className="flip-card__form" action="">
                                        <input className="flip-card__input" name="user" placeholder="Name" type="name" value={state.userName} onChange={handleChange} />
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" value={state.email} onChange={handleChange} />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" value={state.password} onChange={handleChange} />
                                        <button className="flip-card__btn" type="submit" onClick={handlesubmit}>
                                            Add User!
                                        </button>
                                        <button className="flip-card__btn" type="submit" onClick={handlereset}>
                                            reset!
                                        </button>
                                        <Link to="/liste-users">
                                            <button className="flip-card__btn2" type="button">Go to List of Users
                                            </button>
                                        </Link>

                                    </form>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </>
    )
}