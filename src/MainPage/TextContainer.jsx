import '../App.css';
import { Text } from './Text'
import { Select } from './Select';

export const TextContainer = ({ footerHeight, menuHeight }) => {

    return (
        <div className='text-container' style={{ minHeight: 100 - footerHeight + menuHeight + 'vh'  }}>
            <Select />
            <Text />
        </div>
    )
}