router.post('/libraries-test-24', function (req, res) {
  let fruits = req.session.data['fruits'] || []

  // If they pick apple or banana then show them the success page
  if (fruits.includes('banana') || fruits.includes('apple')) {
    res.redirect('branching/success')
  } else {
    res.redirect('branching/failure')
  }
})
