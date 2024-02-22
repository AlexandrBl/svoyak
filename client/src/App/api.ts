export   const getUser = async () => {
  const res = await fetch('/api/auth/user')

  const data = await res.json()

  return data
 } 