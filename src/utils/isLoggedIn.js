function isLoggedIn() {
	
	return (
		localStorage.getItem('role','csrfToken')
		
	)
}
export default isLoggedIn;