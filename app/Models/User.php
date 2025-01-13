<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\invitation\Event;
use App\Models\invitation\Payment;
use App\Models\invitation\Testimonial;
use Illuminate\Notifications\Notifiable;
use App\Models\invitation\PacketInvitation;
use App\Models\invitation\InvitationCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'password',
        'company',
    ];

    public function packetInvitation()
    {
        return $this->belongsTo(PacketInvitation::class, 'packet_id');
    }

    public function invitations()
    {
        return $this->hasMany(InvitationCreated::class, 'created_by');
    }

    public function testimonials()
    {
        return $this->hasMany(Testimonial::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'packet_id',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
