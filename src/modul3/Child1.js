import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nama: "Ayu"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => {
            if (state.nama === "Ayu") {
                return { nama: "Ratna" }
            } else {
                return { nama: "Ayu" }
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('child 1 will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Aku child-1</h4>
                <button onClick={this.ubahNama}>Ubah nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;