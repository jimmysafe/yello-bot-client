import { getBotGuildsList, getUserGuildsList } from '../../discord-api'
import { isLoggedIn } from '../../utils/isLoggedIn'

const Servers = ({ guilds }) => {
    console.log(guilds)
    return (
        <div>
            LIST OF PRIVATE SERVERS
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    await isLoggedIn(ctx)

    const userGuilds = await getUserGuildsList(ctx)
    const botGuilds = await getBotGuildsList(ctx)

    const guildsArray = userGuilds.map(userGuild => {
        let foundGuild = botGuilds.find(guild => guild.id === userGuild.id)
        if(foundGuild) {
            foundGuild.owner = userGuild.owner
            return foundGuild
        }
        else return false
    })

    const guilds = guildsArray.filter(item => item !== false)

    return {
        props: {
            guilds
        }
    }
}

export default Servers
