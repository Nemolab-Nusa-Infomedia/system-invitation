<?php
namespace App\Models\invitation;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'event_name', 'event_type', 'event_date', 
        'location', 'description', 'created_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function gallery()
    {
        return $this->hasMany(Gallery::class);
    }

    public function testimonials()
    {
        return $this->hasMany(Testimonial::class);
    }
}