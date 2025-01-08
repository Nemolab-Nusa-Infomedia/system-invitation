<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvitationCreated extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'created_by', 'created_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}