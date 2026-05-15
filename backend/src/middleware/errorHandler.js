export function errorHandler(err, _req, res, _next) {
  const status = err.status ?? err.statusCode ?? 500
  const message = err.message ?? 'Internal Server Error'
  console.error(err)
  res.status(status).json({ error: message })
}
