import React, { Component } from 'react';
import Languages from '../components/Languages';
import LanguageList from '../components/LanguageList';

class Greeter extends Component {

    state = {
        isLanguagesClicked: false,
        favorite: null
    }

    handleListClicked = (name) => {
        console.log(name);
        this.setState({ favorite: name })
    }

    handleLanguageOptions = () => {
        this.setState({ isLanguagesClicked: true })
    }
    render() {
        const shouldShowLanguages = this.state.isLanguagesClicked;
        const favoriteLanguage = this.state.favorite === null ? <div>No favorite language</div> : <div>{this.state.favorite} is the new favorite</div>
        let menu = shouldShowLanguages === false ? <Languages clicked={this.handleLanguageOptions} /> : <LanguageList listClicked={(name) => this.handleListClicked(name)} />;
        return (
            <h1>
                Hello
                {menu}
                {favoriteLanguage}
            </h1>
        );
    }
}

export default Greeter;