import { useEffect } from "react";
import { account } from "../lib/appwrite"

function App() {
  const verifyUser = async () => {

    const urlParams = new URLSearchParams(window.location.search)
    const userID = urlParams.get("userId")
    const secret = urlParams.get("secret")
    if (userID && secret) {
      await account.updateVerification(userID, secret)
    }

    else {
      alert("Failed to find any userID and secret ID")
    }

    console.log(userID, secret)
  }

  useEffect(() => {
    try {
      verifyUser()
    }
    catch (err) {
      console.log(err)
    }
  }, [])
  return (
    <>
      <h2 style={{
        alignContent: "center",
        justifyContent: "center",
        fontSize: 30,
        fontWeight: "bold"
      }}>You can now go to your app login page</h2>
    </>
  )
}

export default App
