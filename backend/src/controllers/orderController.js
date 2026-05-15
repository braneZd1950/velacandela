export async function createOrder(_req, res) {
  res.status(501).json({ error: 'Kreiranje narudžbe — implementirajte prema dokumentaciji.' })
}

export async function getOrder(_req, res) {
  res.status(501).json({ error: 'Dohvat narudžbe — implementirajte prema dokumentaciji.' })
}

export async function listMyOrders(_req, res) {
  res.status(501).json({ error: 'Moje narudžbe — implementirajte prema dokumentaciji.' })
}

export async function listAllOrders(_req, res) {
  res.status(501).json({ error: 'Admin lista — implementirajte prema dokumentaciji.' })
}

export async function updateOrderStatus(_req, res) {
  res.status(501).json({ error: 'Promjena statusa — implementirajte prema dokumentaciji.' })
}
