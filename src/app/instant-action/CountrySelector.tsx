import { getCountries } from "./server"

export const CountrySelector = async () => {
  
  const data = await getCountries()

  return <>
    <div>Countries</div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  
  </>
}