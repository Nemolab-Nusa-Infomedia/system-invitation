<?php
namespace App\Models\invitation;


use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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