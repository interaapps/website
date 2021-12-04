export function checkUser(store){
    window.interaAppsExternalUserAccess.setOnLoad(() => {
        store.state.auth.loading = false
        if (window.interaAppsExternalUserAccess.loggedIn) {
            store.state.auth.loggedIn = true
            store.state.auth.user     = window.interaAppsExternalUserAccess.user
        }
    })
    setTimeout(()=>{
      window.interaAppsExternalUserAccess.run()
    }, 250)
}