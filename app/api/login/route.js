import {SignJWT} from 'jose';
import {getJwtSecretKey} from '@lib/auth';
import {NextResponse} from 'next/server';

export async function POST(request) {
    const body = await request.json();

    if (body.username === 'admin' && body.password === 'admin') {

        const token = await new SignJWT({
            username: body.username,
            role: 'admin'
        })
            .setProtectedHeader({alg: 'HS256'})
            .setIssuedAt()
            .setExpirationTime('30s')
            .sign(getJwtSecretKey());
        console.log(token);

        //set the cookie
        const response = NextResponse.json({success: true});

        response.cookies.set({
            name: 'token',
            value: token,
            path: '/'
        });

        return response;
    }

    return NextResponse.json({success: false});
}