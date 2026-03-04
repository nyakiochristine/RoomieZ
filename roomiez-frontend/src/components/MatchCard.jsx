import React from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import api from '../api/axios';
import { toast } from 'react-hot-toast';

const MatchCard = ({ match }) => {
  const handleLike = async () => {
    try {
      const res = await api.post(`/profile/like/${match.user._id}`);
      if (res.data.status === 'matched') {
        toast.success("It's a Match! You can now chat.");
      } else {
        toast('Liked!', { icon: '🧡' });
      }
    } catch (err) {
      toast.error("Error sending like");
    }
  };

  return (
    <div className="card" style={{ width: '300px', margin: '15px' }}>
      <div style={{ position: 'relative' }}>
        <img src={match.profile.uniIdImage || 'https://via.placeholder.com/150'}
          style={{ width: '100%', borderRadius: '12px' }} alt="User" />
        <span style={{
          position: 'absolute', top: 10, right: 10,
          background: 'var(--sage-green)', color: 'white',
          padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem'
        }}>
          {match.compatibility}% Match
        </span>
      </div>
      <h3>{match.profile.name}</h3>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        Budget: KSh {match.profile.budgetMin} - {match.profile.budgetMax}
      </p>
      <button onClick={handleLike} className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <Heart size={18} /> Like Roomie
      </button>
    </div>
  );
};

export default MatchCard;

