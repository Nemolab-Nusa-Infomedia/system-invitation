<?php

namespace App\Models\invitation;


use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PacketInvitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'benefits',
    ];

    public function users()
    {
        return $this->hasMany(User::class, 'packet_id');
    }
}