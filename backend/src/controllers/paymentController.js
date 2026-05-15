export async function createPaymentIntent(_req, res) {
  res.status(501).json({ error: 'Stripe PaymentIntent — implementirajte prema dokumentaciji.' })
}

export async function stripeWebhook(_req, res) {
  res.status(501).json({ error: 'Stripe webhook — implementirajte prema dokumentaciji.' })
}
