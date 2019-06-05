
export class UserProfile {
    constructor(params) {
        console.log('User Profile params are ', params);
        this.created_at = params.created_at,
        this.email = params.email,
        this.first = params.first,
        this.last = params.last,
        this.imageUrl = params.imageUrl || "./placeholder.gif" ;
        console.log('This user Profile is ', this );
    }
}