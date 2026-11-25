import './TextContainer.css';
import { Text } from './Text'
import { Select } from './Select';

export const TextContainer = () => {

    return (
        <div className='text-container'>
            <Select />
            <Text />
        </div>
    )
}