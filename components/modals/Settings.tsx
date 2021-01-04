import { FC, useRef, useState, SyntheticEvent } from "react"
import Select, { OptionsType } from 'react-select'
import { useGuildRolesQuery, useUpdateGuildSettingsMutation, RoleType } from '../../graphql/generated'
import Button from "../Button"
import ButtonLoading from '../ButtonLoading'
import Loading from "../Loading"

type Roles = {
    id: string,
    name: string
}

type Props = {
    prefix: string,
    roles: Roles[]
    close: () => void,
    refetchGuild: () => void,
    guild_id: string
}

const format = (roles: RoleType[]) => {
   return roles.map(role => {
       return {
            value: role.id,
            label: role.name
       }
   })
}

const parse = (roles: OptionsType<any>) => {
    return roles.map(role => {
        return {
             id: role.value,
             name: role.label
        }
    })
 }
 

const Settings: FC<Props> = ({ prefix, roles, guild_id, close, refetchGuild }) => {
    const prefixRef = useRef<HTMLInputElement>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')
    
    const [updateSettings, { loading: updateLoading }] = useUpdateGuildSettingsMutation()
    const { data, loading, error } = useGuildRolesQuery({ variables: { guild_id } })
    const [allowedRoles, setAllowedRoles] = useState<Roles[] | OptionsType<any>>(format(roles))

    if(error) console.log(error)
    
    const handleSubmit = async(e: SyntheticEvent) => {
        e.preventDefault()

        const validCharacters: RegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const prefixValue: string = prefixRef.current.value.replace(/\s+/g, '')

        if(prefixValue.length > 2){
            setErrorMessage('Prefix can be max 2 characters')
            return
        }
        
        if(!validCharacters.test(prefixValue)){
            setErrorMessage('Prefix must contain at least 1 special character')
            return
        }

        try {
            setErrorMessage('')
            await updateSettings({ variables: {
                guild_id,
                prefix: prefixValue,
                roles: parse(allowedRoles)
            } })

            refetchGuild()
            close()
          
        } catch(err) {
            setErrorMessage('Error ' + err.message)
        }
    }

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex justify-center items-center z-10">
            <form className="flex relative flex-col justify-center items-center bg-bgColor py-5 px-5 md:px-12 rounded border border-primary w-full md:mx-0 mx-4 md:w-auto" onSubmit={handleSubmit} style={{ minHeight: 350 }}>
                {loading ? <Loading />
                : ( 
                    <>
                        <div className="my-3 w-full">
                            <p className="font-secondary text-white text-sm">Change command prefix</p>
                        </div>
                        <input 
                            ref={prefixRef} 
                            type="text" 
                            defaultValue={prefix}
                            className="bg-secondary w-full px-5 py-3 mb-3 rounded text-white font-secondary focus:outline-none placeholder-textGrey" 
                        />
                        <div className="mt-8 mb-3 w-full">
                            <p className="font-secondary text-white text-sm">What roles can add and delete audio files? </p>
                            <p className="font-secondary text-white text-sm">If left empty everyone will be able to.</p>
                        </div>
                        <Select 
                            placeholder="Everyone"
                            isClearable={false}
                            className="outer_select"
                            classNamePrefix="inner_select"
                            defaultValue={format(roles)}
                            closeMenuOnSelect={false}
                            isMulti
                            options={format(data.guildRoles)}
                            onChange={ (value: OptionsType<any>) => {
                                if(!value) {
                                    setAllowedRoles([])
                                    return
                                }
                                setAllowedRoles(value)
                            } }
                        />
                        {errorMessage && <p className="text-white font-secondary mt-5">{errorMessage}</p>}
                        {updateLoading ?
                            <ButtonLoading loader="/assets/loader.svg" disabled={true} className="w-full mt-7" />
                            :    
                            <Button blue text="Save Settings" className="w-full mt-12"/>
                        }
                        <div className="mt-3 cursor-pointer" onClick={close}>
                    <span className="text-white">Cancel</span>
                </div>
                    </>
                    )
                }
            </form>
        </div>
    )
}

export default Settings
