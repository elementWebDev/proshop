import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })

  // Set JWT as HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // true in production
    sameSite: 'strict',
    // 14 days
    maxAge: 14 * 24 * 60 * 60 * 1000
  })
}

export default generateToken
