import { supabase } from '../functions/supabase';

export async function signup (emailinput: FormDataEntryValue | null, passwordinput: FormDataEntryValue | null) {
    const {data, error} = await supabase.auth.signUp({
        email: emailinput?.toString()!,
        password: passwordinput?.toString()!,
    })
    if (error) {
        return {error: true, message: error.message, user: data.user}
    } else {
        return {error: false, message: "Signed up - please complete email verification", user: data.user}
    }
}

export async function login (emailinput: FormDataEntryValue | null, passwordinput: FormDataEntryValue | null) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: emailinput?.toString()!,
        password: passwordinput?.toString()!,
    })
    if (error) {
        return {error: true, message: error.message, user: data.user}
    } else {
        return {error: false, message: "Logged in", user: data.user}
    }
}

export async function checkAuth () {
    const {data, error} = await supabase.auth.getUser()
    if (error) {
        return {error: true, message: error.message, user: data.user}
    } else {
        return {error: false, message: "User exists", user: data.user}
    }
}

export async function signout () {
    const {error} = await supabase.auth.signOut()
    if (error) {
        return {error: true, message: error.message}
    } else {
        return {error: false, message: "Signed Out"}
    }
}
