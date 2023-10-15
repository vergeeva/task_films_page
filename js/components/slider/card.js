function getCard(cardProps)
{
    let cardHtml = "";
    switch (cardProps["cardType"])
    {
        case "movie":
        {
            let country = cardProps["country"];
            let filmName = cardProps["filmName"];
            let imdb = cardProps["stat"]["imdb"];
            let kp = cardProps["stat"]["kp"];
            let photoUrl = cardProps["photo_url"];
            let genre = "";
            for (let i = 0; i < cardProps["genres"].length - 1; i++ )
            {
                genre += cardProps["genres"][i] + ", ";
            }
            genre += cardProps["genres"][cardProps["genres"].length - 1];
            cardHtml = "";
            break;
        }
        case "person":
        {
            let actorName = cardProps["actorName"];
            let photoUrl = cardProps["photo_url"];
            cardHtml = "";
            break;
        }
    }
    return cardHtml;
}