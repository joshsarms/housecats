public void AddBan(string playerId, uint hours, string reason) {
    PlayFabServerAPI.BanUsers(new BanUsersRequest() {
        Bans = new List<BanRequest>() {
            new BanRequest() {
                DurationInHours = hours,
                PlayFabId = playerId,
                Reason = reason,
            }
        }
    }, result => {
        //... Handle success
    }, error => {
        Debug.Log(error.GenerateErrorReport());
    });
}
