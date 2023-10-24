import './Results.scss'
import JSONPretty from 'react-json-pretty';

function Results(data) {
    console.log('results:', data);
    return (
        <section>
            <JSONPretty id="json-pretty" data={ data }></JSONPretty>
        </section>
    )
}

export default Results;