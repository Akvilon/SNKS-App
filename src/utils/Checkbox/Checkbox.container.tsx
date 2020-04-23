import * as React from 'react';
import { Checkbox } from './Checkbox';

type OwnProps = {
    name: string;
    getBrandTitle: (brand: string) => void
}

class CheckboxContainer extends React.PureComponent<OwnProps> {

    state = {
        checked: false
    }

    handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checked: event.target.checked });
        if (event.target.checked) {
            this.props.getBrandTitle(event.target.name)
        }
    }

    render() {
        const { name} = this.props;
        const { checked } = this.state;
        console.log(checked)
        return (
            <Checkbox
                name={name}
                checked={checked}
                onChange={this.handleCheckboxChange}
            />
        )
    }
}

export { CheckboxContainer as Checkbox }