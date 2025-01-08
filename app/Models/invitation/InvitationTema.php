<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvitationTema extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'thumbnail', 'created_at'
    ];

    public function exampleInvitations()
    {
        return $this->hasMany(ExampleInvitation::class, 'tema_id');
    }

    public function invitationLists()
    {
        return $this->hasMany(InvitationList::class, 'tema_id');
    }
}