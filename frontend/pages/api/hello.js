// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  //get data submitted in request's body
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("response: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.destination || !body.arrival) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ data: "Destination or arrival airport not found" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.destination} -> ${body.arrival}` });
}
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
