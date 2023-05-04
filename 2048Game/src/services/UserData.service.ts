import axios from 'axios'

// function gets all data from the Sql server
const fetchTable = async () => {
    const response = await axios.get('http://127.0.0.1:8080/GetAll')
    return response.data
}

export default fetchTable